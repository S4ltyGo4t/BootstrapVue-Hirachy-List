export default class Node {
  private readonly children: Node[];
  private parent: Node | null;
  public value: string;
  public checked: boolean;
  public id: string;
  public showChildren: boolean;

  constructor(value: string, id: string) {
    this.value = value;
    this.id = id;
    this.parent = null;
    this.children = [];
    this.showChildren = false;
    this.checked = false;
  }

  public addChild(child: Node): void {
    child.setParent(this);
    this.children.push(child);
  }

  private setParent(parent: Node): void {
    this.parent = parent;
  }

  public getChildren(): Node[] {
    return this.children;
  }

  public toggleNodeState() {
    this.checked = !this.checked;
    this.changeChildrenState(this.checked);
    this.updateParent();
  }

  public toggleShow() {
    this.showChildren = !this.showChildren;
  }

  private changeChildrenState(state: boolean) {

    if (this.getChildren().length > 0) {
      this.getChildren().forEach(c => c.changeChildrenState(state));
    }
    this.checked = state;
  }

  private updateParent() {
    if (!!this.parent) {
      if (this.parent.getChildren().length == 1) {
        this.parent.checked = this.checked;
        this.parent.updateParent();
      } else {
        let childrenCheckStates: boolean[] = [];
        this.parent.getChildren().forEach(c => {
          childrenCheckStates.push(c.checked);
        });
        this.parent.checked = childrenCheckStates.every(val => val);
        this.parent.updateParent();
      }
    } else {
      // case for root node
      let childrenCheckStates: boolean[] = [];
      this.getChildren().forEach(c => {
        childrenCheckStates.push(c.checked);
      });
      this.checked = childrenCheckStates.every(val => val);
    }
  }

  printChildren() {
    if (this.getChildren().length > 0) {
      this.getChildren().forEach(c => c.printChildren());
    }
    console.log(`checked: ${this.checked} intermediate: ${this.isIntermediate()} name: ${this.value} `);
  }

  public isIntermediate(): boolean {
    if (this.getChildren().length === 0) {
      return false;
    } else {
      let childrenCheckStates: boolean[] = [];
      this.getChildren().forEach(c => {
        if (c.isIntermediate()) {
          return true;
        } else if (c.checked) {
          childrenCheckStates.push(c.checked);
        }
      });
      if (childrenCheckStates.length === 0) {
        return false;
      } else return childrenCheckStates.length !== this.getChildren().length;
    }
  }
}
