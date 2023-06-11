import tw from "tailwind-styled-components";

export const Div = tw.div`
relative
overflow-x-auto
shadow-md
sm:rounded-lg   
`

export const Table = tw.table`
w-full
text-sm
text-left
text-gray-500
dark:text-gray-400
shadow-md
sm:rounded-lg
m-3
`

export const Tr = tw.tr`
bg-white
dark:bg-gray-700
dark:border-gray-700
`

export const Th = tw.th`
px-6
py-4
font-medium
text-gray-300
whitespace-nowrap
`

export const Container = tw.div`
flex
items-center
justify-center
flex-col
w-90
grid-cols-1
mt-15
pt-10
mx-auto
`

export const Td = tw.td`
mx-3
px-3
text-white
`