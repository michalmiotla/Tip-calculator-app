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
let customValue

const checkBillInput = () => {
	if (billInput.value == 0) {
		billSpan.textContent = "Can't be zero"
		billInput.classList.add('error')
	} else {
		billSpan.textContent = ''
		billInput.classList.remove('error')
	}
}

const checkPeopleInput = () => {
	if (peopleInput.value == 0) {
		peopleSpan.textContent = "Can't be zero"
		peopleInput.classList.add('error')
	} else {
		peopleSpan.textContent = ''
		peopleInput.classList.remove('error')
	}
}

const checkInputs = () => {
	checkBillInput()
	checkPeopleInput()
}

const countTip = () => {
	const bill = parseFloat(billInput.value)
	const select = parseFloat(buttonValue)
	const people = parseInt(peopleInput.value)
	const result = ((select * bill) / people).toFixed(2)

	tipValue.textContent = `$${result}`

	// if ((tipValue.textContent = 'NaN')) tipValue.textContent = 'mu'
}

const countTotal = () => {
	const bill = parseFloat(billInput.value)
	const select = parseFloat(buttonValue)
	const people = parseInt(peopleInput.value)
	const result = ((bill + bill * select) / people).toFixed(2)

	totalValue.textContent = `$${result}`
}

const showResults = e => {
	selectTip.forEach(button => {
		button.addEventListener('click', event => {
			buttonValue = event.target.value
			countTip()
			countTotal()
		})
	})

	billInput.addEventListener('keyup', countTip)
	peopleInput.addEventListener('keyup', countTip)
	billInput.addEventListener('keyup', countTotal)
	peopleInput.addEventListener('keyup', countTotal)
}

const resetResults = () => {
	if (
		parseFloat(billInput.value) == 0 ||
		parseFloat(peopleInput.value) == 0 ||
		billInput.value == '' ||
		peopleInput.value == ''
	) {
		resetBtn.setAttribute('disabled', '')
	} else {
		resetBtn.removeAttribute('disabled')
		resetBtn.addEventListener('click', () => {
			// parseInt(billInput.value) === 0
		})
	}
}

const reset = () => {
	billInput.value = ''
	peopleInput.value = ''
	tipValue.textContent = '$0.00'
	totalValue.textContent = '$0.00'
	resetBtn.setAttribute('disabled', '')
}

window.addEventListener('keyup', checkInputs)
window.addEventListener('keyup', showResults)
window.addEventListener('keyup', resetResults)
resetBtn.addEventListener('click', reset)
