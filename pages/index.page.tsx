import Button from "@/components/atoms/button/Button/Button";

export default function Home() {
  return (
    <div>
      <Button
        handleClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        헬로우
      </Button>
    </div>
  );
}
