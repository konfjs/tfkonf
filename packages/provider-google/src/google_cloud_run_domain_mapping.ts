import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudRunDomainMappingArgsmetadata {
  annotations?: {
    [key: string]: string;
  };
  labels?: {
    [key: string]: string;
  };
  namespace: string;
}
export interface GoogleCloudRunDomainMappingArgsspec {
  certificate_mode?: string;
  force_override?: boolean;
  route_name: string;
}
export interface GoogleCloudRunDomainMappingArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleCloudRunDomainMappingArgs {
  location: string;
  name: string;
  metadata: GoogleCloudRunDomainMappingArgsmetadata;
  spec: GoogleCloudRunDomainMappingArgsspec;
  timeouts: GoogleCloudRunDomainMappingArgstimeouts;
}
export class google_cloud_run_domain_mapping extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly status!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunDomainMappingArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_domain_mapping");
  }
}