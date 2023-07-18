const billSpan = document.querySelector('.bill-span')
const peopleSpan = document.querySelector('.people-span')
const billInput = document.querySelector('.options__bill-input')
const selectTip = document.querySelectorAll('.options__tip-div-value')
const customTip = document.querySelector('.options__tip-div-input')
const peopleInput = document.querySelector('.options__people-input')
const tipValue = document.querySelector('.amount__tip-value')
const totalValue = document.querySelector('.amount__total-value')
const resetBtn = document.querySelector('.amount__reset-btn')
let buttonValue

const checkBillInput = () => {
	if (billInput.value == 0 || billInput.value < 0) {
		billSpan.textContent = "Can't be zero"
		billInput.classList.add('error')
	} else {
		billSpan.textContent = ''
		billInput.classList.remove('error')
	}
}

const checkPeopleInput = () => {
	if (peopleInput.value == 0 || peopleInput.value < 0) {
		peopleSpan.textContent = "Can't be zero"
		peopleInput.classList.add('error')
	} else {
		peopleSpan.textContent = ''
		peopleInput.classList.remove('error')
	}
}

const countTip = () => {
	const bill = parseFloat(billInput.value)
	const select = parseFloat(buttonValue)
	const people = parseInt(peopleInput.value)
	const result = ((select * bill) / people).toFixed(2)

	tipValue.textContent = `$${result}`

	if (result < 0) {
		console.log('ok')
	}
}

const countTotal = () => {
	const bill = parseFloat(billInput.value)
	const select = parseFloat(buttonValue)
	const people = parseInt(peopleInput.value)
	const result = ((bill + bill * select) / people).toFixed(2)

	totalValue.textContent = `$${result}`
}

const countCustom = () => {
	const billCustom = parseFloat(billInput.value)
	const selectCustom = parseFloat(customTip.value) / 100
	const peopleCustom = parseInt(peopleInput.value)
	const resultCustomTip = ((selectCustom * billCustom) / peopleCustom).toFixed(2)
	const resultCustomTotal = ((billCustom + billCustom * selectCustom) / peopleCustom).toFixed(2)

	tipValue.textContent = `$${resultCustomTip}`
	totalValue.textContent = `$${resultCustomTotal}`
}

const showResults = () => {
	selectTip.forEach(button => {
		button.addEventListener('click', event => {
			buttonValue = event.target.value
			checkBillInput()
			checkPeopleInput()
			if (billInput.value != 0 && peopleInput.value != 0) {
				countTip()
				countTotal()
			} else {
				tipValue.textContent = '$0.00'
				totalValue.textContent = '$0.00'
			}
		})
	})
}

const showCustom = () => {
	customTip.addEventListener('click', () => {
		checkBillInput()
		checkPeopleInput()
		if (billInput.value != 0 && peopleInput.value != 0 && customTip.value != 0) {
			countCustom()
		} else {
			tipValue.textContent = '$0.00'
			totalValue.textContent = '$0.00'
		}
	})
}

const handleResetBtn = () => {
	if (parseFloat(billInput.value) == 0 || parseFloat(peopleInput.value) == 0) {
		resetBtn.setAttribute('disabled', '')
	} else {
		resetBtn.removeAttribute('disabled')
	}
}

const reset = () => {
	billInput.value = ''
	peopleInput.value = ''
	customTip.value = ''
	tipValue.textContent = '$0.00'
	totalValue.textContent = '$0.00'
	resetBtn.setAttribute('disabled', '')
	billSpan.textContent = ''
	billInput.classList.remove('error')
	peopleSpan.textContent = ''
	peopleInput.classList.remove('error')
}

window.addEventListener('keyup', showCustom)
window.addEventListener('keyup', showResults)
window.addEventListener('keyup', handleResetBtn)
resetBtn.addEventListener('click', reset)
