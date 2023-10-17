interface LabelCardProps {
  label: string;
  no: number;
}

export default function LabelCard({ label, no }: LabelCardProps) {
  return (
    <>
      <label className="text-[#494949]">{label}</label>
      <div className="text-white bg-[#999999]">
        <option value={no}>{no}</option>
      </div>
    </>
  );
}
