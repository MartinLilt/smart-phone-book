export default function randomStub() {
  const random = Math.floor(Math.random() * 5);

  switch (random) {
    case 0 || 1:
      return (
        <p>
          xxxxxxx xxx <b>xxxxxxx</b> xx*******xxxxx--xxxx xxxxx
        </p>
      );

    case 2 || 3:
      return (
        <p>
          xxxx xxxxxx--xx xxxx xx*****xx <b>xxxxxxx</b> xxxx---
        </p>
      );

    case 4 || 5:
      return (
        <p>
          xxxx xxxxx <b>xxxxxxx</b> xxx**** ****x xxxx xxx--xxxxx x---x-x
        </p>
      );

    default:
      return (
        <p>
          xxxx xxxxx <b>xxxxxxx</b> xxx**** ****x xxxx xxx--xxxxx x---x-x
        </p>
      );
  }
}
