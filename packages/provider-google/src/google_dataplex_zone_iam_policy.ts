import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataplexZoneIamPolicyArgs {
  dataplex_zone: string;
  lake: string;
  policy_data: string;
}
export class google_dataplex_zone_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexZoneIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_zone_iam_policy");
  }
}