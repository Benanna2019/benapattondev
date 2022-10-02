export function trimEmail(email: string) {
  return email.substring(0, email.indexOf("@"));
}

export function trimBodyToExcerpt(body: string) {
  return body.substring(0, 40);
}

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function slugifyPostTitle(title: string) {
  const str = title.replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
  return str;
}
