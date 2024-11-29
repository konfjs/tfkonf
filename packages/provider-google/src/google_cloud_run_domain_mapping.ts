import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudRunDomainMappingArgsMetadata {
  annotations?: {
    [key: string]: string;
  };
  labels?: {
    [key: string]: string;
  };
  namespace: string;
}
export interface GoogleCloudRunDomainMappingArgsSpec {
  certificate_mode?: string;
  force_override?: boolean;
  route_name: string;
}
export interface GoogleCloudRunDomainMappingArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleCloudRunDomainMappingArgs {
  location: string;
  name: string;
  metadata: GoogleCloudRunDomainMappingArgsMetadata;
  spec: GoogleCloudRunDomainMappingArgsSpec;
  timeouts: GoogleCloudRunDomainMappingArgsTimeouts;
}
export class google_cloud_run_domain_mapping extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly status!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunDomainMappingArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_domain_mapping");
  }
}