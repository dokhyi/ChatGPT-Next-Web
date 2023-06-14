import { showModal } from "./ui-lib";
import { MarkdownAnnouncement } from "./markdowna";

export function showAnnouncement(notice: string) {
  showModal({
    title: "Announcement 公告",
    children: <MarkdownAnnouncement content={notice} />,
    // onClose: () => {}
  });
}
