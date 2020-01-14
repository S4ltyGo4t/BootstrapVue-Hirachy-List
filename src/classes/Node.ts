export default class Node {
  private children: Node[];
  private value: string;
  private checked: boolean;

  constructor(children: Node[] = [], value: string, checked: boolean = false) {
    this.children = children;
    this.value = value;
    this.checked = checked;
  }

  public checkAll() {
    if (this.children.length > 0) {
      this.children.forEach(c => {
        c.checkAll();
      });
    } else {
      this.checked = true;
    }
  }

  public getValue(): string[] {
    return [];
  }
}
