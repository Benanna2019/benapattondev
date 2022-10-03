import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { MapPin } from "react-feather";
import CharlestonPinMap from "/public/pin_map_charleston.png";

import { Detail } from "../ListDetail/Detail";
import { TitleBar } from "../ListDetail/TitleBar";
import { trpc } from "../../utils/trpc";
import WritingHighlightCard from "../Writing/WritingHighlightCard";

function SectionTitle(props: any) {
  return (
    <h4
      className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  );
}

function SectionContent(props: any) {
  return <div className="col-span-10" {...props} />;
}

interface TableRowProps {
  href: string;
  title: string;
  date: string;
  subtitle?: string;
}

function TableRow({ href, title, subtitle, date }: TableRowProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="group flex items-center space-x-4"
    >
      <strong className="flex-none font-medium text-gray-1000 group-hover:text-yala-purple group-hover:underline dark:text-gray-100 dark:group-hover:text-yala-purple">
        {title}
      </strong>
      <span className="w-full shrink border-t border-dashed border-gray-300 dark:border-gray-800" />
      {subtitle && <span className="text-tertiary flex-none">{subtitle}</span>}
      {date && (
        <span className="text-quaternary flex-none font-mono">{date}</span>
      )}
    </a>
  );
}

function SectionContainer(props: any) {
  return (
    <div
      className="grid grid-cols-1 items-start gap-6 md:grid-cols-12"
      {...props}
    />
  );
}

const workHistory = [
  {
    href: "https://comparecredit.com",
    title: "CompareCredit",
    subtitle: "Associate Software Engineer",
    date: "2022—\u00a0\u00a0",
  },
  {
    href: "https://careerchangers.co",
    title: "Career Changer Newsletter",
    subtitle: "Owner",
    date: "2020—\u00a0\u00a0",
  },
  {
    href: "https://tiag.net/",
    title: "TIAG",
    subtitle: "Junior Software Developer",
    date: "2021—22",
  },
];

const speakingData = [
  {
    href: "",
    title: "Check back later...",
    date: "tbd",
  },
];

export function Intro() {
  const featuredArticles = trpc.useQuery(["posts.featuredArticles"]);
  const { data, isLoading, isError } = featuredArticles;
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);

  return (
    <Detail.Container data-cy="home-intro" ref={scrollContainerRef}>
      <TitleBar
        magicTitle
        titleRef={titleRef}
        scrollContainerRef={scrollContainerRef}
        title="Home"
      />

      {/* Keep this div to trigger the magic scroll */}
      <div className="p-4" ref={titleRef} />

      <Detail.ContentContainer>
        <div className="space-y-8 pb-24 md:space-y-16">
          <SectionContainer>
            <SectionTitle />
            <SectionContent>
              <div className="text-primary prose">
                <p>
                  Hey, I&apos;m Ben. I&apos;m a developer and{" "}
                  <Link href="/writing">
                    <span>writer</span>
                  </Link>
                  . I am currently writing a{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yala-purple"
                    href="https://careerchangers.co"
                  >
                    newsletter{" "}
                  </a>
                  for those thinking about or in process of changing careers to
                  software developers.
                </p>
                <p>
                  I love all things javascript and occassionally dabble with
                  other languages, Go, Rust, Elixir and only watch videos about
                  C++.
                </p>
                <p>
                  Right now I am loving typescript/jsdoc, incrementally using
                  functional programming libraries (ramda and lodash), and
                  expanding my cloud knowledge.
                </p>
                <p className="italic font-bold">
                  Credit where it is due. I borrowed layout initial styles from{" "}
                  <a
                    href="https://brianlovin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brian Lovin
                  </a>
                  . Other pieces come with inspiration from{" "}
                  <a
                    href="https://swyx.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Swyx
                  </a>
                  ,{" "}
                  <a
                    href="https://leerob.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lee Robinson
                  </a>
                  , and heavy inspiration use of{" "}
                  <a
                    href="https://dayoneapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Day One Journaling App
                  </a>
                  . One of my favorite articles by David Perell is{" "}
                  <a
                    href="https://perell.com/essay/imitate-then-innovate/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Imitate, Then Innovate
                  </a>
                  , so that is my aim here. Gradually make it my own but start
                  with something I love.
                </p>
                <h2 className="mt-5 mb-5">A Little Background</h2>
                <p>
                  My aim in life is to care for and love others and to use code,
                  writing, time, etc to that end.
                </p>

                <p>
                  Before becoming a software developer I worked in non-profit. I
                  made a living off of fundraising and was able to work with
                  people in all stages of life. The last year and a half of
                  non-profit work was spent working with Senior Adults. My
                  non-profit days are the catalyst for much of my thinking and
                  how I hope to impact the world through software.
                </p>
                <h2 className="">Writing Highlights</h2>
                <div className="flex gap-6 flex-col md:flex-row">
                  {isLoading || isError || !data?.featuredArticles
                    ? null
                    : data.featuredArticles.map((featuredArticle: any) => (
                        <WritingHighlightCard
                          key={featuredArticle.featuredArticle[0]._id}
                          title={featuredArticle.featuredArticle[0].title}
                          slug={featuredArticle.featuredArticle[0].slug.current}
                          gradient="from-[#6441A5] to-[#9D6EFF]"
                        />
                      ))}
                </div>
                <Link href="/writing">
                  <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-yala-purple transition-all h-6">
                    Read all posts
                  </a>
                </Link>
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Online</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                <TableRow
                  href={"https://www.linkedin.com/in/benjaminapatton/"}
                  title={"LinkedIn"}
                  subtitle={"Follow"}
                  date={""}
                />
                <TableRow
                  href={
                    "https://www.youtube.com/channel/UCdznsnxpwF9qQCqfOomUqXg"
                  }
                  title={"YouTube"}
                  subtitle={"Subscribe"}
                  date={""}
                />
                <TableRow
                  href={"https://github.com/Benanna2019"}
                  title={"GitHub"}
                  subtitle={"Follow"}
                  date={""}
                />
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Where</SectionTitle>
            <SectionContent>
              <Image
                priority
                src={CharlestonPinMap}
                width={800}
                height={400}
                layout="responsive"
                className="rounded-2xl"
                quality={100}
                alt="Map of Charleston SC Tri-country area"
              />
              <p className="text-quaternary flex items-center justify-end space-x-2 pt-2 text-sm md:text-right">
                <MapPin size={12} />
                <span>Charleston, SC</span>
              </p>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Work</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                {workHistory.map((job) => (
                  <TableRow
                    href={job.href}
                    title={job.title}
                    subtitle={job.subtitle}
                    date={job.date}
                    key={job.href}
                  />
                ))}
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Speaking</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                {speakingData
                  ? speakingData.map((s) => (
                      <TableRow
                        href={s.href}
                        title={s.title}
                        date={s.date}
                        key={s.href}
                      />
                    ))
                  : null}
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  );
}
