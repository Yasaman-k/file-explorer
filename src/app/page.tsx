import ActionIcon from "./component/ActionIcon";
import Image from 'next/image'

export default function Home() {
  return (
    <div style={{ padding: '4rem' }}>
      <main>
        <div style={{ display: "flex", alignItems: 'center', gap: '20px' }}>


          <div className="box-style" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src={`folder.svg`} alt={'add-file'} width="15" height="15" />
            <span> Root</span>
          </div>

          <ActionIcon />
        </div>
      </main >

    </div >
  );
}
