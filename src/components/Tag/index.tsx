import { XCircle } from "react-feather";

export function Tags({ tags }: any) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap space-x-2">
      {tags.map((tag: any) => (
        <Tag
          key={tag.name ? tag.name : tag.title}
          name={tag.name ? tag.name : tag.title}
        />
      ))}
    </div>
  );
}

export function Tag({ name }: any) {
  const baseClasses =
    "flex-none justify-center flex items-center space-x-2 cursor-pointer self-start border uppercase rounded-full hover:bg-opacity-10 dark:hover:bg-opacity-30 px-3 py-0.5 text-xs font-semibold leading-5 tracking-wide border-opacity-50 dark:border-opacity-10";

  let specificClasses = "";
  if (name) {
    switch (name?.toLowerCase()) {
      case "indie": {
        specificClasses =
          "border-purple-200 text-purple-600 dark:text-purple-300 bg-purple-500 bg-opacity-5 dark:bg-opacity-10";
        break;
      }
      case "open source": {
        specificClasses =
          "border-green-200 text-green-600 dark:text-green-200  bg-green-500 bg-opacity-5 dark:bg-opacity-10";
        break;
      }
      case "portfolio": {
        specificClasses =
          "border-blue-200 text-blue-600 dark:text-blue-200 bg-blue-500 bg-opacity-5 dark:bg-opacity-10";
        break;
      }
      case "website": {
        specificClasses =
          "border-red-200 text-red-600 dark:text-red-200 bg-red-500 bg-opacity-5 dark:bg-opacity-10";
        break;
      }
      case "reading": {
        specificClasses =
          "border-green-200 text-green-600 dark:text-green-300 bg-green-200 bg-opacity-5 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "developer": {
        specificClasses =
          "border-gray-200 text-gray-600 dark:text-gray-300 bg-gray-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "developer relations": {
        specificClasses =
          "border-fuchsia-200 text-fuchsia-600 dark:text-fuchsia-300 bg-fuchsia-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "developer experience": {
        specificClasses =
          "border-fuchsia-200 text-fuchsia-600 dark:text-fuchsia-300 bg-fuchsia-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "technical": {
        specificClasses =
          "border-gray-200 text-gray-600 dark:text-gray-300 bg-gray-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "guides": {
        specificClasses =
          "border-sky-200 text-sky-600 dark:text-sky-300 bg-sky-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "part time creator": {
        specificClasses =
          "border-orange-200 text-orange-600 dark:text-orange-300 bg-orange-200 bg-opacity-5 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "work": {
        specificClasses =
          "border-cyan-200 text-cyan-600 dark:text-cyan-300 bg-cyan-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "productivity": {
        specificClasses =
          "border-teal-200 text-teal-600 dark:text-teal-300 bg-teal-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "random thoughts": {
        specificClasses =
          "border-gray-200 text-gray-600 dark:text-gray-300 bg-gray-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "nextjs": {
        specificClasses =
          "border-blue-200 text-blue-600 dark:text-blue-300 bg-blue-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "networking": {
        specificClasses =
          "border-gray-200 text-gray-600 dark:text-gray-300 bg-gray-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "junior developer": {
        specificClasses =
          "border-lime-200 text-lime-600 dark:text-lime-300 bg-lime-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "javascript": {
        specificClasses =
          "border-yellow-200 text-yellow-600 dark:text-yellow-300 bg-yellow-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "coding bootcamp": {
        specificClasses =
          "border-indigo-200 text-indigo-600 dark:text-indigo-300 bg-indigo-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "career changer": {
        specificClasses =
          "border-violet-200 text-violet-600 dark:text-violet-300 bg-violet-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "design patterns": {
        specificClasses =
          "border-gray-200 text-gray-600 dark:text-gray-300 bg-gray-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "react": {
        specificClasses =
          "border-sky-200 text-sky-600 dark:text-sky-300 bg-sky-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "svelte": {
        specificClasses =
          "border-red-200 text-red-600 dark:text-red-300 bg-red-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "serverless": {
        specificClasses =
          "border-yellow-200 text-yellow-600 dark:text-yellow-300 bg-yellow-300 bg-opacity-5 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
      case "__clear_tag_picker": {
        specificClasses =
          "border-gray-200 text-gray-600 dark:text-gray-300 bg-gray-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40";
        break;
      }
    }
  }
  return (
    <span className={`${baseClasses} ${specificClasses}`}>
      {name === "__clear_tag_picker" ? (
        <>
          <XCircle size={16} />
          <span>Clear tag</span>
        </>
      ) : (
        name
      )}
    </span>
  );
}
