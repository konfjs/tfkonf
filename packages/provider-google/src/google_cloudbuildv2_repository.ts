import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudbuildv2RepositoryArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleCloudbuildv2RepositoryArgs {
  annotations?: {
    [key: string]: string;
  };
  name: string;
  parent_connection: string;
  remote_uri: string;
  timeouts: GoogleCloudbuildv2RepositoryArgsTimeouts;
}
export class google_cloudbuildv2_repository extends TerraformResource {
  readonly create_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudbuildv2RepositoryArgs) {
    super(config, "resource", args, resourceName, "google_cloudbuildv2_repository");
  }
}