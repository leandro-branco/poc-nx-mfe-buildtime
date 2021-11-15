import './main.module.css';

/* eslint-disable-next-line */
export interface MainProps { }

export function Main(props: MainProps) {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>Creators</h1>
    </div>
  );
}

export default Main;
