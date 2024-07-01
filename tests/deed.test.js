const Deed = artifacts.require('Deed');

contract('Deed', async (accounts) => {
    let deed = null;
    before(async () => {
        deed = await Deed.deployed();
    });

    it('should withdraw', async () => {
        //get balance first
        const initialBalance = web3.utils.toBN(
        await web3.eth.getBalance(accounts[1]));
        //5000 = 5sec   
        await new Promise((resolve => setTimeout(resolve, 5000)));
        //withdrawing from account 0
        await deed.withdraw({ from: accounts[0] })
        const finalBalance = web3.utils.toBN(
            await web3.eth.getBalance(accounts[1]))
        assert(finalBalance.sub(initialBalance).toNumber() === 100);
    });
    it('should NOT withdraw too early', async () => {
        const deed = await Deed.new(
            //arguments from constructor
            accounts[0],
            accounts[1],
            5,
            {value: 100}
        );
        try {
            await deed.withdraw({ from: accounts[0] });
        } catch(e) {
            assert(e.message.includes('Too early to withdraw'));
            return;
        }
        assert(false);
    });
    it('should NOT withdraw if caller is not the lawyer', async () => {
        const deed = await Deed.new(
            //arguments from constructor
            accounts[0],
            accounts[1],
            5,
            { value: 100 });
        try {
            //5000 = 5sec   
            await new Promise((resolve => setTimeout(resolve, 5000)));
            await deed.withdraw({ from: accounts[5] });
        } catch(e) {
            assert(e.message.includes('Lawyer only'));
            return;
        }
        assert(false);
    });
});