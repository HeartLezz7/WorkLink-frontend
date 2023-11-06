export default function TransactionCard() {
  return (
    <div className="flex flex-col gap-1 p-2 rounded-xl border">
      <p className="truncate">TransactionId : fdsa68fe4564ds8ef56d</p>
      <p className="truncate">Type : Withdraw</p>
      {/* <p>Detail : Work title</p> */}
      <p className="truncate">Date-Time : 20/11/65 - 08:00:59</p>
      <p className="truncate">Amount : 500 Bath</p>
      <div className="flex w-full justify-between">
        <p className="text-textNavy font-semibold underline-offset-2 underline truncate cursor-pointer">
          Proof of payment
        </p>
        <p className="text-secondaryLight font-bold truncate">
          Status : pending
        </p>
      </div>
    </div>
  );
}
