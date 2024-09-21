import { TreeProvider } from "./context/TreeContext";
import TreeComponent from "./component/TreeComponent";

export default function Home() {
  return (
    <div style={{ padding: '4rem' }}>
      <main>
        <TreeProvider>
          <TreeComponent />
        </TreeProvider>
      </main >
    </div >
  );
}
