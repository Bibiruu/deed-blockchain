const Deed = artifact.require('Deed')

contract('Deed', async () => {
    let deed = null;
    before( async () => {
        deed = await Deed.deployed();
    });

    it('should be lawyer only', async () => {

    });

})