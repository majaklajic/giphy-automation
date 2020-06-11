import Page from "./page";

class Upload extends Page {
  open() {
    super.open("./upload");
  }

  get uploadButtonOnChannelPage() {
    return $("a=Upload");
  }

  get uploadToGiphyButton() {
    return $("button=Upload to GIPHY");
  }

  get uploadPreview() {
    return $(".upload-preview__Container-w8wiph-0.hvoXfk");
  }
  get uploadButton() {
    return $("button=Upload to GIPHY");
  }

  get channelPage() {
    return $("#react-target.channel-page");
  }

  get fileInput() {
    return $('input[type="file"]');
  }

  get urlInput() {
    return $('input[type="url"]');
  }

  get uploadPreview() {
    return $("div.upload__Panel-sc-1it2ln2-0.eYhgMi");
  }

  get publicSwitch() {
    return $("span=On");
  }

  get animatedGif() {
    return $('video[alt="Animated GIF"]');
  }

  get multipleFilesUploadStatus() {
    return $(".message__Text-sc-1dazjsu-0.gSvxYc");
  }
}

export default new Upload();
