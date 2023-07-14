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

const countTip = () => {
	const bill = parseFloat(billInput.value)
	const select = parseFloat(buttonValue)
	const people = parseInt(peopleInput.value)
	const result = ((select * bill) / people).toFixed(2)

	tipValue.textContent = `$${result}`
}

const countTotal = () => {
	const bill = parseFloat(billInput.value)
	const select = parseFloat(buttonValue)
	const people = parseInt(peopleInput.value)
	const result = ((bill + bill * select) / people).toFixed(2)

	totalValue.textContent = `$${result}`
}

const showResults = e => {

	billInput.addEventListener('keyup', countTip)
	billInput.addEventListener('keyup', countTotal)
	peopleInput.addEventListener('keyup', countTip)
	peopleInput.addEventListener('keyup', countTotal)

	selectTip.forEach(button => {
		button.addEventListener('click', event => {
			buttonValue = event.target.value
			countTip()
			countTotal()
		})
	})
}

showResults()
