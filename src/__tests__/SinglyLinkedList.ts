import SinglyLinkedList from '@code/SinglyLinkedList'
import { test_list } from './ListTest'

test('linked-list', function () {
  const list = new SinglyLinkedList<number>()

  list.append(5)
  list.append(7)
  list.append(5)
  list.append(6)
  list.append(3)
  list.append(4)
  list.append(9)
  list.append(7)

  list.lastKth(4)

  list.printList()

  expect(1).toEqual(1)
})
