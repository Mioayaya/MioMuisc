class WindowDrag {
  private dragging = false
  private offsetX: number = 0
  private offsetY: number = 0

  constructor() {
    this.addListeners()
  }

  private addListeners(): void {
    const dragArea = document.getElementById('drag-area')
    if (!dragArea) return

    dragArea.addEventListener('mousedown', this.onMouseDown.bind(this))
    dragArea.addEventListener('mousemove', this.onMouseMove.bind(this))
    dragArea.addEventListener('mouseup', this.onMouseUp.bind(this))
  }

  private onMouseDown(event: MouseEvent): void {
    this.dragging = true
    this.offsetX = event.clientX
    this.offsetY = event.clientY
    console.log('Mouse Down')
  }

  private onMouseMove(event: MouseEvent): void {
    if (this.dragging) {
      const deltaX = event.clientX - this.offsetX
      const deltaY = event.clientY - this.offsetY

      // 将窗口移动的位置更新到页面上（在渲染进程中使用 CSS）
      const currentPosition = document.getElementById('app-container')!
      const rect = currentPosition.getBoundingClientRect()

      currentPosition.style.position = 'absolute'
      currentPosition.style.left = `${rect.left + deltaX}px`
      currentPosition.style.top = `${rect.top + deltaY}px`

      this.offsetX = event.clientX
      this.offsetY = event.clientY
    }
  }

  private onMouseUp(): void {
    this.dragging = false
  }
}

export default WindowDrag
