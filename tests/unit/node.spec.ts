// import Node from '@/classes/Node';
//
// describe('Node.ts', () => {
//   it('parent should not be intermediate with all child false', () => {
//     let root: Node = new Node('root');
//     let leaf1: Node = new Node('leaf1');
//     let leaf2: Node = new Node('leaf2');
//     let before = root.isIntermediate();
//     root.addChild(leaf1);
//     root.addChild(leaf2);
//     let after = root.isIntermediate();
//
//     expect(before).toBe(false);
//     expect(after).toBe(false);
//   });
//   it('parent should be intermediate with one child true', () => {
//     let root: Node = new Node('root');
//     let leaf1: Node = new Node('leaf1');
//     let leaf2: Node = new Node('leaf2');
//     let before = root.isIntermediate();
//     root.addChild(leaf1);
//     root.addChild(leaf2);
//     leaf1.check();
//     let after = root.isIntermediate();
//
//     expect(before).toBe(false);
//     expect(after).toBe(true);
//   });
// });
//
