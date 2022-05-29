import s from './Container.module.scss';

export default function Container({ children }) {
  return (
    <>
      <section
        className={
          children.type.name === 'DownloadApp'
            ? s.container_current
            : s.container
        }
      >
        {children}
      </section>
    </>
  );
}
