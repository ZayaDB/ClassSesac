export default function CharactorInfo({ charactorInfo }) {
  return (
    <>
      <div>Name: {charactorInfo.name}</div>
      <div>Age: {charactorInfo.age}</div>
      <div>NickName: {charactorInfo.nickName}</div>
    </>
  );
}
