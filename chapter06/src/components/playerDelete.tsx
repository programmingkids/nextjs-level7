'use client';

import { useState } from 'react';
import { HiTrash } from 'react-icons/hi2';
import { PlayerDeleteModal } from '@/components/playerDeleteModal';

type Props = {
  id: number;
  name: string;
};

export const PlayerDelete = ({ id, name }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="text-lg text-red-500 cursor-pointer hover:text-red-800">
        <HiTrash onClick={handleClick} />
      </div>
      {open && (
        <PlayerDeleteModal
          id={id}
          name={name}
          open={open}
          onClose={() => setOpen(false)}
          title="削除"
          successText="削除"
          cancelText="キャンセル"
        />
      )}
    </>
  );
};
