import React from "react";
import Link from "next/link";
import {
  Code2,
  MapPin,
  Phone,
  Link as LinkIcon,
  Mail,
  User,
  Clock,
} from "lucide-react";

const HeroInfo = () => {
  const InfoItem = ({ icon, text, isLink, href }) => (
    <div className="flex items-center gap-4 text-[14px] group">
      <div className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors shrink-0">
        {icon}
      </div>
      {isLink ? (
        <Link
          href={href}
          target="_blank"
          className="hover:underline underline-offset-4 decoration-zinc-400 truncate"
        >
          {text}
        </Link>
      ) : (
        <span className="text-zinc-700 dark:text-zinc-300 truncate">{text}</span>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="p-4 space-y-5 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
        <InfoItem
          icon={<Code2 size={18} />}
          text="Software Developer @STARTWITH BASICX"
        />
        <InfoItem icon={<MapPin size={18} />} text="Jaipur, India" />
        <InfoItem icon={<Phone size={18} />} text="+91 9602673468" />
        <InfoItem
          icon={<LinkIcon size={18} />}
          text="ritikgupta.in"
          isLink
          href="https://ritikgupta.in"
        />
      </div>

      {/* Right Stats */}
      <div className="p-8 space-y-5 bg-zinc-50/30 dark:bg-zinc-900/10">
        <div className="flex items-center gap-4 text-[14px]">
          <Clock size={18} className="text-zinc-400" />
          <span className="text-zinc-700 dark:text-zinc-300">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <InfoItem icon={<Mail size={18} />} text="ritikgupta856@gmail.com" />
        <InfoItem icon={<User size={18} />} text="he/him" />
      </div>
    </div>
  );
};

export default HeroInfo;
