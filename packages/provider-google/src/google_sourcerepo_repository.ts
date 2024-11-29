import { TerraformConfig, TerraformResource } from "tfs";
export interface PubsubConfigs {
  message_format: string;
  topic: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSourcerepoRepositoryArgs {
  create_ignore_already_exists?: boolean;
  name: string;
  pubsub_configs: PubsubConfigs;
  timeouts: Timeouts;
}
export class google_sourcerepo_repository extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly size!: number;
  readonly url!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSourcerepoRepositoryArgs) {
    super(config, "resource", args, resourceName, "google_sourcerepo_repository");
  }
}