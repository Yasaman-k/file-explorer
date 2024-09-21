import ActionIcon from "./component/actionIcon";

export default function Home() {
  return (
    <div style={{ padding: '4rem' }}>
      <main>
        <div style={{ display: "flex", alignItems: 'center' }}>
          <div className="box-style">Root</div>
          <ActionIcon />
        </div>
      </main >

    </div >
  );
}
