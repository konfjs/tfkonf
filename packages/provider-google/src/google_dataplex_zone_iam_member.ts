import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataplexZoneIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexZoneIamMemberArgs {
  dataplex_zone: string;
  lake: string;
  member: string;
  role: string;
  condition: GoogleDataplexZoneIamMemberArgsCondition;
}
export class google_dataplex_zone_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexZoneIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_zone_iam_member");
  }
}