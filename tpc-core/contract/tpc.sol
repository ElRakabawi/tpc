pragma solidity ^0.4.17;

contract TPC {
    
    //Structs
    struct Institution {
        address addr;
        string inst;
        string officer;
        uint date;
    }
    
    struct Faculty {
        address addr;
        address inst;
        string fac;
        string officer;
        uint date;
    }
    
    //Variables
    address regulator;
    
    //Mappings
    mapping (address => Institution) institutions;
    mapping (address => Faculty) faculties;
    
    //Init function
    function TPC(address reg_address) internal {
        regulator = reg_address;
    }
    
    //Modifiers
    modifier onlyReg() {
        require(msg.sender == regulator);
        _;
    }
    
    modifier onlyInst() {
        require(institutions[msg.sender].addr == msg.sender);
        _;
    }
    
    modifier onlyFac() {
        require(faculties[msg.sender].addr == msg.sender);
        _;
    }
    
    //Pubic functions
    function add_inst(address addr, string inst, string officer) onlyReg() public {
        
    }
    
    function add_fac(address addr, string fac, string officer) onlyInst() public {
        
    }
    
    function add_op(address addr, string officer) onlyFac() {
        
    }
    
}