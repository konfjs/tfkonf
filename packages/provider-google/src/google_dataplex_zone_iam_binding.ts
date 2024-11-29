import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataplexZoneIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexZoneIamBindingArgs {
  dataplex_zone: string;
  lake: string;
  members: string[];
  role: string;
  condition: GoogleDataplexZoneIamBindingArgscondition;
}
export class google_dataplex_zone_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexZoneIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_zone_iam_binding");
  }
}