"use client";

import styles from "./navMenu.module.css";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { RiHome7Fill } from "react-icons/ri";
import { RiHome7Line } from "react-icons/ri";

import { RiSearch2Line } from "react-icons/ri";
import { RiSearch2Fill } from "react-icons/ri";

import { MdMailOutline } from "react-icons/md";
import { MdMail } from "react-icons/md";

import { GoPerson } from "react-icons/go";
import { GoPersonFill } from "react-icons/go";

interface Props {}

const NavMenu: React.FC<Props> = () => {
  const segmemt = useSelectedLayoutSegment();
  const me = { id: "jeaho" };

  const HomeIcon = segmemt === "home" ? RiHome7Fill : RiHome7Line;
  const SearchIcon = segmemt === "explore" ? RiSearch2Fill : RiSearch2Line;
  const MessagesIcon = segmemt === "messages" ? MdMail : MdMailOutline;
  const ProfileIcon = segmemt === me.id ? GoPersonFill : GoPerson;

  return (
    <nav>
      <ul>
        <li>
          <Link href={"/home"}>
            <div className={styles.navPill}>
              <HomeIcon size={25} />
              <span>홈</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/explore"}>
            <div className={styles.navPill}>
              <SearchIcon size={25} />
              <span>탐색하기</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/messages"}>
            <div className={styles.navPill}>
              <MessagesIcon size={25} />
              <span>쪽지</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`/${me.id}`}>
            <div className={styles.navPill}>
              <ProfileIcon size={25} />
              <span>프로필</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
