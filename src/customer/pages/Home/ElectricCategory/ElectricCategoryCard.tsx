import React from 'react'
import type { HomeCategory } from '../../../../types/HomeCategoryTypes'

const ElectricCategoryCard = ({ item }: { item: HomeCategory }) => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <img className="object-contain h-10" src={item.image}>
      </img>
      <h2 className="font-semibold text-sm">{item.name}</h2>
    </div>
  )
}

export default ElectricCategoryCard