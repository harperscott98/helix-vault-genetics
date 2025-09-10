// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract HelixVaultGenetics is SepoliaConfig {
    using FHE for *;
    
    struct GeneticData {
        euint32 dataId;
        euint32 ownerId;
        euint32[] encryptedGenes;
        euint32[] encryptedTraits;
        euint32 privacyLevel;
        bool isActive;
        bool isVerified;
        string dataHash;
        address owner;
        uint256 timestamp;
    }
    
    struct ResearchProject {
        euint32 projectId;
        euint32 targetDataCount;
        euint32 currentDataCount;
        euint32 budget;
        bool isActive;
        bool isVerified;
        string projectName;
        string description;
        address researcher;
        uint256 startTime;
        uint256 endTime;
    }
    
    struct DataAccess {
        euint32 accessId;
        euint32 dataId;
        euint32 projectId;
        euint32 accessLevel;
        bool isGranted;
        bool isRevoked;
        address requester;
        uint256 timestamp;
    }
    
    struct MarketplaceListing {
        euint32 listingId;
        euint32 dataId;
        euint32 price;
        euint32 accessType;
        bool isActive;
        bool isSold;
        string description;
        address seller;
        uint256 timestamp;
    }
    
    struct PrivacyScore {
        euint32 score;
        euint32 dataPoints;
        euint32 accessCount;
        bool isCalculated;
        address owner;
        uint256 lastUpdated;
    }
    
    mapping(uint256 => GeneticData) public geneticData;
    mapping(uint256 => ResearchProject) public researchProjects;
    mapping(uint256 => DataAccess) public dataAccess;
    mapping(uint256 => MarketplaceListing) public marketplaceListings;
    mapping(address => PrivacyScore) public privacyScores;
    mapping(address => euint32) public userReputation;
    mapping(address => euint32[]) public userDataIds;
    mapping(address => euint32[]) public userProjectIds;
    
    uint256 public dataCounter;
    uint256 public projectCounter;
    uint256 public accessCounter;
    uint256 public listingCounter;
    
    address public owner;
    address public verifier;
    address public privacyOracle;
    
    event GeneticDataStored(uint256 indexed dataId, address indexed owner, string dataHash);
    event ResearchProjectCreated(uint256 indexed projectId, address indexed researcher, string projectName);
    event DataAccessGranted(uint256 indexed accessId, uint256 indexed dataId, uint256 indexed projectId);
    event MarketplaceListingCreated(uint256 indexed listingId, uint256 indexed dataId, address indexed seller);
    event PrivacyScoreUpdated(address indexed user, uint32 score);
    event ReputationUpdated(address indexed user, uint32 reputation);
    
    constructor(address _verifier, address _privacyOracle) {
        owner = msg.sender;
        verifier = _verifier;
        privacyOracle = _privacyOracle;
    }
    
    function storeGeneticData(
        externalEuint32[] calldata encryptedGenes,
        externalEuint32[] calldata encryptedTraits,
        externalEuint32 privacyLevel,
        string memory dataHash,
        bytes[] calldata inputProofs
    ) public returns (uint256) {
        require(encryptedGenes.length > 0, "Genetic data cannot be empty");
        require(bytes(dataHash).length > 0, "Data hash cannot be empty");
        
        uint256 dataId = dataCounter++;
        
        // Convert external encrypted data to internal format
        euint32[] memory internalGenes = new euint32[](encryptedGenes.length);
        euint32[] memory internalTraits = new euint32[](encryptedTraits.length);
        
        for (uint256 i = 0; i < encryptedGenes.length; i++) {
            internalGenes[i] = FHE.fromExternal(encryptedGenes[i], inputProofs[i]);
        }
        
        for (uint256 i = 0; i < encryptedTraits.length; i++) {
            internalTraits[i] = FHE.fromExternal(encryptedTraits[i], inputProofs[encryptedGenes.length + i]);
        }
        
        euint32 internalPrivacyLevel = FHE.fromExternal(privacyLevel, inputProofs[encryptedGenes.length + encryptedTraits.length]);
        
        geneticData[dataId] = GeneticData({
            dataId: FHE.asEuint32(0), // Will be set properly later
            ownerId: FHE.asEuint32(0), // Will be set properly later
            encryptedGenes: internalGenes,
            encryptedTraits: internalTraits,
            privacyLevel: internalPrivacyLevel,
            isActive: true,
            isVerified: false,
            dataHash: dataHash,
            owner: msg.sender,
            timestamp: block.timestamp
        });
        
        // Add data ID to user's data list
        userDataIds[msg.sender].push(FHE.asEuint32(dataId));
        
        emit GeneticDataStored(dataId, msg.sender, dataHash);
        return dataId;
    }
    
    function createResearchProject(
        string memory projectName,
        string memory description,
        uint256 targetDataCount,
        uint256 budget,
        uint256 duration
    ) public returns (uint256) {
        require(bytes(projectName).length > 0, "Project name cannot be empty");
        require(targetDataCount > 0, "Target data count must be positive");
        require(duration > 0, "Duration must be positive");
        
        uint256 projectId = projectCounter++;
        
        researchProjects[projectId] = ResearchProject({
            projectId: FHE.asEuint32(0), // Will be set properly later
            targetDataCount: FHE.asEuint32(targetDataCount),
            currentDataCount: FHE.asEuint32(0),
            budget: FHE.asEuint32(budget),
            isActive: true,
            isVerified: false,
            projectName: projectName,
            description: description,
            researcher: msg.sender,
            startTime: block.timestamp,
            endTime: block.timestamp + duration
        });
        
        // Add project ID to user's project list
        userProjectIds[msg.sender].push(FHE.asEuint32(projectId));
        
        emit ResearchProjectCreated(projectId, msg.sender, projectName);
        return projectId;
    }
    
    function requestDataAccess(
        uint256 dataId,
        uint256 projectId,
        externalEuint32 accessLevel,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(geneticData[dataId].owner != address(0), "Genetic data does not exist");
        require(researchProjects[projectId].researcher != address(0), "Research project does not exist");
        require(researchProjects[projectId].isActive, "Research project is not active");
        require(block.timestamp <= researchProjects[projectId].endTime, "Research project has ended");
        
        uint256 accessId = accessCounter++;
        
        euint32 internalAccessLevel = FHE.fromExternal(accessLevel, inputProof);
        
        dataAccess[accessId] = DataAccess({
            accessId: FHE.asEuint32(0), // Will be set properly later
            dataId: FHE.asEuint32(dataId),
            projectId: FHE.asEuint32(projectId),
            accessLevel: internalAccessLevel,
            isGranted: false,
            isRevoked: false,
            requester: msg.sender,
            timestamp: block.timestamp
        });
        
        emit DataAccessGranted(accessId, dataId, projectId);
        return accessId;
    }
    
    function grantDataAccess(uint256 accessId, bool isGranted) public {
        require(dataAccess[accessId].requester != address(0), "Data access request does not exist");
        require(geneticData[uint256(FHE.decrypt(dataAccess[accessId].dataId))].owner == msg.sender, "Only data owner can grant access");
        
        dataAccess[accessId].isGranted = isGranted;
        
        if (isGranted) {
            // Update project data count
            uint256 projectId = uint256(FHE.decrypt(dataAccess[accessId].projectId));
            researchProjects[projectId].currentDataCount = FHE.add(
                researchProjects[projectId].currentDataCount, 
                FHE.asEuint32(1)
            );
        }
    }
    
    function createMarketplaceListing(
        uint256 dataId,
        externalEuint32 price,
        externalEuint32 accessType,
        string memory description,
        bytes[] calldata inputProofs
    ) public returns (uint256) {
        require(geneticData[dataId].owner == msg.sender, "Only data owner can create listing");
        require(geneticData[dataId].isActive, "Genetic data is not active");
        require(bytes(description).length > 0, "Description cannot be empty");
        
        uint256 listingId = listingCounter++;
        
        euint32 internalPrice = FHE.fromExternal(price, inputProofs[0]);
        euint32 internalAccessType = FHE.fromExternal(accessType, inputProofs[1]);
        
        marketplaceListings[listingId] = MarketplaceListing({
            listingId: FHE.asEuint32(0), // Will be set properly later
            dataId: FHE.asEuint32(dataId),
            price: internalPrice,
            accessType: internalAccessType,
            isActive: true,
            isSold: false,
            description: description,
            seller: msg.sender,
            timestamp: block.timestamp
        });
        
        emit MarketplaceListingCreated(listingId, dataId, msg.sender);
        return listingId;
    }
    
    function purchaseDataAccess(
        uint256 listingId,
        externalEuint32 paymentAmount,
        bytes calldata inputProof
    ) public payable {
        require(marketplaceListings[listingId].seller != address(0), "Marketplace listing does not exist");
        require(marketplaceListings[listingId].isActive, "Listing is not active");
        require(!marketplaceListings[listingId].isSold, "Listing already sold");
        
        euint32 internalPaymentAmount = FHE.fromExternal(paymentAmount, inputProof);
        
        // Verify payment amount matches listing price
        require(
            FHE.eq(internalPaymentAmount, marketplaceListings[listingId].price),
            "Payment amount does not match listing price"
        );
        
        // Mark listing as sold
        marketplaceListings[listingId].isSold = true;
        marketplaceListings[listingId].isActive = false;
        
        // Transfer payment to seller (simplified - in real implementation, handle FHE amounts)
        address seller = marketplaceListings[listingId].seller;
        payable(seller).transfer(msg.value);
    }
    
    function updatePrivacyScore(
        address user,
        externalEuint32 score,
        externalEuint32 dataPoints,
        externalEuint32 accessCount,
        bytes[] calldata inputProofs
    ) public {
        require(msg.sender == privacyOracle, "Only privacy oracle can update scores");
        require(user != address(0), "Invalid user address");
        
        euint32 internalScore = FHE.fromExternal(score, inputProofs[0]);
        euint32 internalDataPoints = FHE.fromExternal(dataPoints, inputProofs[1]);
        euint32 internalAccessCount = FHE.fromExternal(accessCount, inputProofs[2]);
        
        privacyScores[user] = PrivacyScore({
            score: internalScore,
            dataPoints: internalDataPoints,
            accessCount: internalAccessCount,
            isCalculated: true,
            owner: user,
            lastUpdated: block.timestamp
        });
        
        emit PrivacyScoreUpdated(user, 0); // FHE.decrypt(internalScore) - will be decrypted off-chain
    }
    
    function updateUserReputation(address user, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(user != address(0), "Invalid user address");
        
        userReputation[user] = reputation;
        emit ReputationUpdated(user, 0); // FHE.decrypt(reputation) - will be decrypted off-chain
    }
    
    function verifyGeneticData(uint256 dataId, bool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify data");
        require(geneticData[dataId].owner != address(0), "Genetic data does not exist");
        
        geneticData[dataId].isVerified = isVerified;
    }
    
    function verifyResearchProject(uint256 projectId, bool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify projects");
        require(researchProjects[projectId].researcher != address(0), "Research project does not exist");
        
        researchProjects[projectId].isVerified = isVerified;
    }
    
    function getGeneticDataInfo(uint256 dataId) public view returns (
        uint8 privacyLevel,
        bool isActive,
        bool isVerified,
        string memory dataHash,
        address owner,
        uint256 timestamp
    ) {
        GeneticData storage data = geneticData[dataId];
        return (
            0, // FHE.decrypt(data.privacyLevel) - will be decrypted off-chain
            data.isActive,
            data.isVerified,
            data.dataHash,
            data.owner,
            data.timestamp
        );
    }
    
    function getResearchProjectInfo(uint256 projectId) public view returns (
        string memory projectName,
        string memory description,
        uint8 targetDataCount,
        uint8 currentDataCount,
        uint8 budget,
        bool isActive,
        bool isVerified,
        address researcher,
        uint256 startTime,
        uint256 endTime
    ) {
        ResearchProject storage project = researchProjects[projectId];
        return (
            project.projectName,
            project.description,
            0, // FHE.decrypt(project.targetDataCount) - will be decrypted off-chain
            0, // FHE.decrypt(project.currentDataCount) - will be decrypted off-chain
            0, // FHE.decrypt(project.budget) - will be decrypted off-chain
            project.isActive,
            project.isVerified,
            project.researcher,
            project.startTime,
            project.endTime
        );
    }
    
    function getMarketplaceListingInfo(uint256 listingId) public view returns (
        uint8 price,
        uint8 accessType,
        bool isActive,
        bool isSold,
        string memory description,
        address seller,
        uint256 timestamp
    ) {
        MarketplaceListing storage listing = marketplaceListings[listingId];
        return (
            0, // FHE.decrypt(listing.price) - will be decrypted off-chain
            0, // FHE.decrypt(listing.accessType) - will be decrypted off-chain
            listing.isActive,
            listing.isSold,
            listing.description,
            listing.seller,
            listing.timestamp
        );
    }
    
    function getUserReputation(address user) public view returns (uint8) {
        return 0; // FHE.decrypt(userReputation[user]) - will be decrypted off-chain
    }
    
    function getPrivacyScore(address user) public view returns (
        uint8 score,
        uint8 dataPoints,
        uint8 accessCount,
        bool isCalculated,
        uint256 lastUpdated
    ) {
        PrivacyScore storage privacy = privacyScores[user];
        return (
            0, // FHE.decrypt(privacy.score) - will be decrypted off-chain
            0, // FHE.decrypt(privacy.dataPoints) - will be decrypted off-chain
            0, // FHE.decrypt(privacy.accessCount) - will be decrypted off-chain
            privacy.isCalculated,
            privacy.lastUpdated
        );
    }
    
    function revokeDataAccess(uint256 accessId) public {
        require(dataAccess[accessId].requester != address(0), "Data access does not exist");
        require(geneticData[uint256(FHE.decrypt(dataAccess[accessId].dataId))].owner == msg.sender, "Only data owner can revoke access");
        
        dataAccess[accessId].isRevoked = true;
        dataAccess[accessId].isGranted = false;
    }
    
    function deactivateGeneticData(uint256 dataId) public {
        require(geneticData[dataId].owner == msg.sender, "Only data owner can deactivate");
        
        geneticData[dataId].isActive = false;
    }
    
    function withdrawProjectFunds(uint256 projectId) public {
        require(researchProjects[projectId].researcher == msg.sender, "Only researcher can withdraw");
        require(researchProjects[projectId].isVerified, "Project must be verified");
        require(block.timestamp > researchProjects[projectId].endTime, "Project must be ended");
        
        researchProjects[projectId].isActive = false;
        
        // Transfer funds to researcher (simplified - in real implementation, handle FHE amounts)
        // payable(msg.sender).transfer(amount);
    }
}
