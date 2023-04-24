import Button from '@/components/atomic/button/Button/Button'

export default function Home() {
  return (
    <div>
      <Button label='헬로우' clickEvent={function (): void {
        throw new Error('Function not implemented.')
      } }/>
    </div>
  )
}
