import Button from '@/components/atoms/button/Button/Button'

export default function Home() {
  return (
    <div>
      <Button label='헬로우' handleClick={function (): void {
        throw new Error('Function not implemented.')
      } }/>
    </div>
  )
}
