import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudbuildv2ConnectionIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudbuildv2ConnectionIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleCloudbuildv2ConnectionIamBindingArgsCondition;
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
