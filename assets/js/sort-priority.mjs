const PINNED_SERVER_NAME = 'MineVN'

export function comparePinnedServerNameFirst (nameA, nameB) {
  const isPinnedA = nameA === PINNED_SERVER_NAME
  const isPinnedB = nameB === PINNED_SERVER_NAME

  if (isPinnedA && !isPinnedB) {
    return -1
  }

  if (isPinnedB && !isPinnedA) {
    return 1
  }

  return 0
}

export function comparePinnedServerFirst (serverA, serverB) {
  return comparePinnedServerNameFirst(serverA.data.name, serverB.data.name)
}
