import ProofPaymentModal from "../../../components/modal/userTransactionModal/ProofPaymentModal";
import getDateTime from "../../../utils/getDateTime";
import { useState } from "react";

export default function TransactionCard({ detail }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-1 p-2 rounded-xl border">
      <p className="text-sm truncate">TransactionId : {detail.id}</p>
      <p className="text-sm truncate">Type : {detail.type}</p>
      {/* <p>Detail : Work title</p> */}
      <p className="text-sm truncate">
        Date-Time : {getDateTime(detail.updatedAt)}
      </p>
      <p className="text-sm truncate">Amount : {detail.amount} Bath</p>
      <div className="flex w-full justify-between">
        {detail.slipImage ? (
          <>
            <p
              onClick={() => {
                setIsOpen(true);
              }}
              className="text-textNavy text-sm font-semibold underline-offset-2 underline truncate cursor-pointer"
            >
              Proof of payment
            </p>
            {isOpen && (
              <ProofPaymentModal
                setIsOpen={setIsOpen}
                image={detail.slipImage}
              />
            )}
          </>
        ) : (
          <div></div>
        )}

        <p className="text-secondaryLight text-sm font-bold truncate">
          Status : pending
        </p>
      </div>
    </div>
  );
}
