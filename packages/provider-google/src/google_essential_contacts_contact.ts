import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleEssentialContactsContactArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleEssentialContactsContactArgs {
  email: string;
  language_tag: string;
  notification_category_subscriptions: string[];
  parent: string;
  timeouts?: GoogleEssentialContactsContactArgsTimeouts;
}
export class google_essential_contacts_contact extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEssentialContactsContactArgs) {
    super(config, "resource", args, resourceName, "google_essential_contacts_contact");
  }
}