import { AppApi } from "@lib/AppApi";
import { AbstractApi, getUserId } from "@lib/utilities";
import { IDiscussion } from "@pages/dao/[id]/discussion/create";
import { IProposalEndpointBody } from "../proposal/ProposalApi";

export default class DiscussionApi extends AbstractApi {
  api: AppApi;
  value: IDiscussion;
  setValue: Function;

  constructor(api: AppApi, value: IDiscussion, setValue: Function) {
    super();
    this.api = api;
    this.value = value;
    this.setValue = setValue;
  }

  validData(): Boolean {
    return true;
  }

  cleanData(image_url: string, dao_id: number): IProposalEndpointBody {
    console.log(dao_id);
    return {
      dao_id: isNaN(dao_id) ? 1 : dao_id,
      user_id: getUserId(),
      name: this.value.name,
      image_url: image_url,
      category: this.value.category,
      content: this.value.content,
      references: this.value.references,
      attachments: [],
      is_proposal: false,
    };
  }

  create(image_url: string, dao_id: number): Promise<any> | void {
    const data = this.cleanData(image_url, dao_id);
    return this.post("/proposals", data);
  }
}
