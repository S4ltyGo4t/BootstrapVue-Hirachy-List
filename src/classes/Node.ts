export default class Node {
  private readonly children: Node[];
  private parent: Node | null;
  private value: string;
  public checked: boolean;
  private intermediate: boolean;

  constructor(value: string) {
    this.value = value;
    this.parent = null;
    this.children = [];
    this.checked = false;
    this.intermediate = false;
  }

  public addChild(child: Node): void {
    child.setParent(this);
    this.children.push(child);
  }

  private setParent(parent: Node): void {
    this.parent = parent;
  }

  private setIntermediate(val: boolean) {
    this.intermediate = val;
  }

  public getChildren(): Node[] {
    return this.children;
  }

  public getIntermediate(): boolean {
    return this.intermediate;
  }

  public getValue(): string[] {
    // TODO IMPLEMENT
    return [];
  }

  public insertFunctionNameHere() {
    // TODO FIX
    this.checked = !this.checked;
    this.updateParentState();
    // if (this.children.length > 0) {
    //   this.children.forEach(c => {
    //     c.insertFunctionNameHere();
    //   });
    // } else {
    //   this.checked = true;
    // }
  }

  private updateParentState() {
    if (!!this.parent) {
      if (this.parent.isIntermediate()) {
        this.parent.setIntermediate(true);
        console.log('Parent: ', this.parent.value);
        console.log('Intermediate: ', this.parent.intermediate);
      } else {
        console.log('Parent: ', this.parent.value);
        console.log('Intermediate: ', this.parent.intermediate);
      }
    }
    // if (this.children.length > 0) {
    //   this.children.forEach(c => {
    //     return c.updateParentState();
    //   });
    // } else {
    //   return this.checked;
    // }

    // if (this.parent) {
    //   let checkStatus = this.parent.children.map(check => {
    //     return check.checked;
    //   });
    //   const every = checkStatus.every(Boolean);
    //   const some = checkStatus.some(Boolean);
    //
    //   this.parent.checked = every;
    //   this.parent.intermediate = !every && every !== some;
    // }
  }


  public isIntermediate(): boolean {
    if (this.children.length > 0) {
      let childCheckStates: boolean[] = [];
      this.children.forEach(child => {
        childCheckStates.push(child.checked);
      });
      return childCheckStates.some(Boolean) && !childCheckStates.every(Boolean);
    }
    return false;
  }

  //TODO REMOVE
  public check() {
    this.checked = !this.checked;
  }

}
