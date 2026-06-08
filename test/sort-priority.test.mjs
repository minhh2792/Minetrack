import test from 'node:test'
import assert from 'node:assert/strict'

import {
  comparePinnedServerFirst,
  comparePinnedServerNameFirst
} from '../assets/js/sort-priority.mjs'

test('comparePinnedServerFirst places MineVN before other servers', () => {
  const minevn = { data: { name: 'MineVN' } }
  const other = { data: { name: 'Other Server' } }

  assert.equal(comparePinnedServerFirst(minevn, other), -1)
  assert.equal(comparePinnedServerFirst(other, minevn), 1)
  assert.equal(comparePinnedServerFirst(other, { data: { name: 'Elsewhere' } }), 0)
})

test('comparePinnedServerNameFirst places MineVN before other names', () => {
  assert.equal(comparePinnedServerNameFirst('MineVN', 'Other Server'), -1)
  assert.equal(comparePinnedServerNameFirst('Other Server', 'MineVN'), 1)
  assert.equal(comparePinnedServerNameFirst('Other Server', 'Elsewhere'), 0)
})
