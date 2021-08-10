import os
import zipfile
from shutil import copytree, rmtree

import wget


def copy_template(
    name, template_name, path="./tmp/bouto-main/templates/", verbose=False
):
    if verbose:
        print("creating project {}".format(name))
    src_path = "{}{}".format(path, template_name)
    dest_path = "./{}".format(name)
    copytree(src_path, dest_path)
    if verbose:
        print("deleting {}".format("./tmp"))
    rmtree("./tmp")


def download(url, verbose=False):
    if verbose:
        print("downloading from {} to tmp.zip".format(url))
    wget.download(url, "./tmp.zip")


def unzip(zip_path="./tmp.zip", extract_path="./tmp/", verbose=False):
    if verbose:
        print("extracting {} to {}".format(zip_path, extract_path))
    with zipfile.ZipFile(zip_path, "r") as zip_ref:
        zip_ref.extractall(extract_path)
    if verbose:
        print("deleting {}".format(zip_path))
    os.remove(zip_path)
