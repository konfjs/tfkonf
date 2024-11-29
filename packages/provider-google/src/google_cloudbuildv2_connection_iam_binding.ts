import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudbuildv2ConnectionIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudbuildv2ConnectionIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleCloudbuildv2ConnectionIamBindingArgscondition;
}
export class google_cloudbuildv2_connection_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudbuildv2ConnectionIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_cloudbuildv2_connection_iam_binding");
  }
}