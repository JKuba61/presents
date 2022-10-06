const presents = document.querySelectorAll(`.present`)
const boxes = document.querySelectorAll(`.box`)
const box1 = document.querySelector(`.present-box`)
const box2 = document.querySelector(`.present-box-choosen`)
const sendBtn = document.querySelector(`.send-btn`)

presents.forEach(present => {
	present.addEventListener(`dragstart`, () => {
		present.classList.add(`isDragged`)
	})
	present.addEventListener(`dragend`, () => {
		present.classList.remove(`isDragged`)
	})
})

boxes.forEach(box => {
	box.addEventListener(`dragover`, e => {
		e.preventDefault()
		const draggedItem = document.querySelector(`.isDragged`)
		box.append(draggedItem)

		handleMaxChoosenItems()
	})
})

const handleMaxChoosenItems = () => {
	const choosenItems = box1.querySelectorAll('.present')
	if (box1.childElementCount <= 3) {
		choosenItems.forEach(item => {
			item.setAttribute(`draggable`, `false`)
			item.classList.add(`present-disabled`)
		})
		sendBtn.disabled = false}
	 else {
		choosenItems.forEach(item => {
			item.setAttribute(`draggable`, `true`)
			item.classList.remove(`present-disabled`)
		})
		sendBtn.disabled = true
	}
}
