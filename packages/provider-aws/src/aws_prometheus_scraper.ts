import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPrometheusScraperArgsDestinationAmp {
  workspace_arn: string;
}

export interface AwsPrometheusScraperArgsDestination {
  amp: AwsPrometheusScraperArgsDestinationAmp;
}

export interface AwsPrometheusScraperArgsSourceEks {
  cluster_arn: string;
  subnet_ids: string[];
}

export interface AwsPrometheusScraperArgsSource {
  eks: AwsPrometheusScraperArgsSourceEks;
}

export interface AwsPrometheusScraperArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsPrometheusScraperArgs {
  alias?: string;
  scrape_configuration: string;
  tags?: { [key: string]: string };
  destination: AwsPrometheusScraperArgsDestination;
  source: AwsPrometheusScraperArgsSource;
  timeouts?: AwsPrometheusScraperArgsTimeouts;
}

export class aws_prometheus_scraper extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly role_arn!: string;
  readonly tags_all!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsPrometheusScraperArgs) {
    super(config, "resource", args, resourceName, "aws_prometheus_scraper");
  }
}
