let token__address = "0x5515969B7472b6D71e4Dbe845C67Ce43C46C32dB";
let token__abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Bought",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Minted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDropCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "sendMoney",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "setDropCount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "price_",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const chainId = 56





var contract;
var account;
var provider;
var type_connect;

var provider_cw = new WalletConnectProvider.default({
	// bridge: "https://bridge.walletconnect.org",
	infuraId: "d336097b75d423ff628eaafd33397973",
	// qrcode: false,
	theme: "dark",
	rpc: {
		// 137: 'https://matic-mainnet.chainstacklabs.com',
		1337: 'http://192.168.1.36:8545',
		// BSC Testnet
		97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
		// BSC Mainnet
		56: 'https://bsc-dataseed.binance.org/',

	},
});
var provider_mm = window.ethereum;




const open_connect = async () => $.fancybox.open(document.getElementById('connect-popup'));




async function change_text(connect = true) {
	let text = connect ? account.slice(0, 4) + '...' + account.slice(-4) : "Connect Wallet";

	$('.connect-btn').text(text);
	$('.connect_wallet_').text(text);
	// убираем класс
	// switch class disconnect-btn
	$('.connect-btn').toggleClass('disconnect-btn');
	$('.connect_wallet_').toggleClass('disconnect-btn');
	$('.disconnect-btn').on('click', function () {
		disconnect();
	});
	$('.token-form-btn').html('Buy LOGG token');
	$('.token-price-auth').css('display', 'block');
	$('.token-price-noauth').css('display', 'none');
}

async function change_price(price) {
	console.log('p', price);
	$('.token_price').text(w3.utils.fromWei(price));
}

async function drop_count(dropcount) {
	console.log('d', dropcount);
	$('.dropcount').text(dropcount);
}

var connectWC = async function (type = 'mm') {
	// если type = mm, то porvider = provider_mm
	if (type == 'mm') {
		type_connect = 'mm';
		if (provider_mm) {
			provider = window.ethereum;
		} else {
			alert('Please install MetaMask!');
			return;
		}

	} else if (type == 'cw') {
		type_connect = 'cw';
		provider = provider_cw;
	}
	await provider.enable();


	const web3 = new Web3(provider);
	window.w3 = web3;

	var accounts = await web3.eth.getAccounts();
	account = accounts[0];
	change_text()

	await changeChain(chainId)
	await SC.connectToContract()
}

var sign = async function (msg) {
	if (w3) {
		return await window.w3.eth.personal.sign(msg, account);
	} else {
		return false
	}
}

var disconnect = async function () {
	if (w3) {
		await provider.disconnect();
		change_text(false);
	}
}

var changeChain = async function (chainId) {
	if (w3) {
		// сменить сеть, если ее нет добавить
		await provider.request({
			method: 'wallet_switchEthereumChain',
			params: [{ chainId: w3.utils.toHex(chainId) }],
		}).then(() => {
			return true;
		}).catch((error) => {
			console.log(error);
			// если в предложение a есть слово wallet_addEthereumChain
			// addChain(chainId);
		})


	}
}

var addChain = async function (chainId) {
	if (w3) {
		await provider.request({
			method: 'wallet_addEthereumChain',
			// BSC Mainnet
			params: [{
				chainId: w3.utils.toHex(chainId),
				chainName: 'Binance Smart Chain Mainnet',
				nativeCurrency: {
					name: 'BNB',
					symbol: 'bnb',
					decimals: 18,
				},
				rpcUrls: ['https://bsc-dataseed.binance.org/'],
				blockExplorerUrls: ['https://bscscan.com/'],
			}],
		});
	}
}

var addToken = async function () {
	if (w3) {
		await provider.request({
			method: 'wallet_watchAsset',
			params: {
				type: 'ERC20',
				options: {
					address: token__address,
					symbol: 'LOGG',
					decimals: 0,
					image: 'https://logarithm.games/img/gate-logo.png',
				},
			},
		});
	} else {
		return false
	}
}

class SC {
	static async connectToContract() {
		contract = new w3.eth.Contract(token__abi, token__address);
		// проверка на работает ли контракт
		SC.getPriceToken();
		SC.getDropCountToken();
		return contract;
	}

	// получение баланса токена
	static async getBalanceToken() {
		if (contract) {
			return await contract.methods.balanceOf(account).call();
		} else {
			return false
		}
	}

	static async getPriceToken() {
		if (contract) {
			let _price = await contract.methods.getPrice().call();
			console.log(_price, 'p');
			change_price(_price)
			return _price;
		} else {
			return false
		}
	}

	static async getDropCountToken() {
		if (contract) {
			let _dropcount = await contract.methods.getDropCount().call();
			console.log(_dropcount, 'd');
			drop_count(_dropcount)
			return _dropcount;
		} else {
			return false
		}
	}

	static async buyToken() {

		if (window.w3) {
			console.log('w3', w3);
			if (contract) {
				try{
				let price = await contract.methods.getPrice().call();
				let dropcount = await contract.methods.getDropCount().call();
				let count = $('#log-token')[0].value;
				// gas int
				let gas = ((await contract.methods.buy().estimateGas({ from: account, value: price * count })) / 100 * 105);
				gas = Math.round(gas);
				console.log('gas', gas);
				console.log('price', price);
				console.log('account', account);
				console.log('value', count);
				console.log('dropcount', dropcount);
				return await contract.methods.buy().send({ from: account, value: price * count, gas: gas });
				} catch(err){
					$(document).ready(function () {
               					$("#errormodal").addClass('errormodal-display');
        				});
				}
			} else {
				await SC.connectToContract()
				SC.buyToken()
				// alert('Connect Wallet');
				return false
			}
		} else {
			open_connect()
		}
	}
}


$('.connect_cw').on('click', function () {
	console.log('connect_cw');
	$.fancybox.close()
	connectWC('cw');
})

$('.connect_mm').on('click', function () {
	console.log('connect_mm');
	$.fancybox.close()
	connectWC('mm');
})

$('.buy_token').on('click', function () {
	console.log('ss');
	SC.buyToken();
})

$('.connect_wallet_').on('click', function () { 
	if (!account) {
		open_connect()
	}
})

// при загрузке страницы
$(document).ready(function () {
	if (!window.ethereum) {
		// добавить класс для скрытия кнопок
		$('.connect_mm').addClass('inactive');
	}
})

$(document).ready(function () {
	if (!account) {
		$('.token-form-btn').html('Connect Wallet');
		$('.token-price-auth').css('display', 'none');
		$('.token-price-noauth').css('display', 'flex');
	}
})

